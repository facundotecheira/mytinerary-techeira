import { useState, useRef, useEffect } from "react"
import { connect } from 'react-redux';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import comentaryAction from '../redux/actions/comentaryAction';

const Comments = (props) => {

    const inputHandler = useRef() 
    const [shown, setShown] = useState(false)
    const { id, todo } = props
    let comentariosFiltrados = todo.filter((coment) => coment.itinerary == id)

    
    useEffect(() => {
        setShown(false)
        console.log(props.render)
    }, [props.render])



    return (
        <>

            {comentariosFiltrados && comentariosFiltrados.map((comentario) => {
                
                if (props.usuario && props.usuario._id == comentario.userId) {
                  
                    if (!shown) {

                        return (
                            <div className="containerComent">
                                <p className='comment'>{comentario.comentary} </p>
                                <FaPencilAlt className="iconEdit" onClick={() => setShown(!shown)} />
                            </div>


                        )
                    } else {
                        return (

                            <div className="containerComent">
                                <input type="text" className='comment' defaultValue={comentario.comentary} ref={inputHandler} />
                                <IoSend className="send" onClick={()=>  props.editComment(comentario._id,  inputHandler.current.value)  }/> 
                                <FaTrashAlt className="iconDelete" />
                            </div>

                        )
                    }

                } else {
                    return <p className='comment'>{comentario.comentary} </p>
                }

            })}

        </>

    )

}

const mapStateToProps = (state) => {
    return {

        listaComentario: state.comentary.listComentary,
        usuario: state.user.usuario,
        auxiliar: state.comentary.auxiliar
    }
}

export default connect(mapStateToProps)(Comments)