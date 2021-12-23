import { useState, useRef, useEffect } from "react"
import { connect } from 'react-redux';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'


const Activity = (props) => {

    const { id, todo } = props
    let numer;

    let actividadesFiltradas = todo.filter((actividades) => actividades.itineraryId == id)


    return (
        <>

            {actividadesFiltradas.length != 0 &&
                <div>

                    <h3 className='text-center'>Activities</h3>
                    <div className='images'>



                        {actividadesFiltradas.map((actividades) => {
                            return (
                                actividades.activities.map((acti) => {
                                    return (

                                        <div key={acti.photo} className='image'>
                                            <img className="imageImg" src={`/assets/${acti.photo}`} />
                                            <p>{acti.name}</p>
                                        </div>
                                    )

                                })
                            )

                        })}

                    </div>
                </div>
                }



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


