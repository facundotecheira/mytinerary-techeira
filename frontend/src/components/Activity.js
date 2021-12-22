import { useState, useRef, useEffect } from "react"
import { connect } from 'react-redux';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'


const Activity = (props) => {

    const { id, todo } = props
    let auxiliar;

    todo.map((xd) => {
        if (xd.itineraryId == id) {
            auxiliar = xd
        }

    })

//     let actividadesFiltradas = todo.filter((actividades) => actividades.itineraryId == id)

//    actividadesFiltradas.map((probando)=>{
//        console.log(probando)
//    })


    return (
        <>
            <div className='images'>

                {auxiliar.activities.map((nose) => {
                    return (
                        <div className='image'>
                            <img className="imageImg" src={`/assets/${nose.photo}`} />
                            <p>{nose.name}</p>
                        </div>
                    )
                })}

            </div>
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
export default connect(mapStateToProps)(Activity)