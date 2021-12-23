import { useState, useRef, useEffect } from "react"
import { connect } from 'react-redux';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'

import Swal from 'sweetalert2'

const Comments = (props) => {

    const inputHandler = useRef()
    const [shown, setShown] = useState(false)
    const { id, todo } = props
    let comentariosFiltrados = todo.filter((coment) => coment.itinerary == id)


    const confirmAlert = (comentarioId) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.deleteComment(comentarioId)
                Swal.fire(
                    'Deleted!',
                    'Your comment has been deleted.',
                    'success'
                )
            }
        })
    }



    useEffect(() => {
        setShown(false)
     
    }, [props.render])



    return (
        <>

            {comentariosFiltrados && comentariosFiltrados.map((comentario) => {

                if (props.usuario && props.usuario._id == comentario.userId) {

                    if (!shown) {

                        return (
                            <div key={comentario._id} className="containerComent">
                                {console.log(props.usuario.url)}
                                <img className="imguser " src={comentario.comentaryPhoto} alt="usericon"></img>
                                <p className='comment'>{comentario.comentary} </p>
                                <FaPencilAlt className="iconEdit" onClick={() => setShown(!shown)} />
                            </div>


                        )
                    } else {
                        return (

                            <div key={comentario.comentaryPhoto} className="containerComent">
                                <img className="imguser " src={comentario.comentaryPhoto} alt="usericon"></img>
                                <input type="text" className='comment' defaultValue={comentario.comentary} ref={inputHandler} />
                                <IoSend className="send" onClick={() => props.editComment(comentario._id, inputHandler.current.value)} />
                                <FaTrashAlt className="iconDelete" onClick={() => confirmAlert(comentario._id)} />
                            </div>

                        )
                    }

                } else {

                    return (
                        <div key={comentario.comentary} className="containerComent">
                            <img className="imguser " src={comentario.comentaryPhoto} alt="usericon"></img>
                            <p className='comment'>{comentario.comentary} </p>
                        </div>
                        

                    )
                }

            })}

        </>

    )

}

const mapStateToProps = (state) => {
    return {

      
        usuario: state.user.usuario,

    }
}

export default connect(mapStateToProps)(Comments)