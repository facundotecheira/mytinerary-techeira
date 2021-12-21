import { array } from 'joi';
import { connect } from 'react-redux';
const Comments = (props)=>{
    const {id,todo} = props
    let auxiliar = todo.filter((xd)=>xd.itinerary == id)
    
    return(
        <>
            
             {auxiliar && auxiliar.map((nose) => {

                      
                      
                        if(props.usuario && props.usuario._id == nose.userId) {
                             return <input type="text" className='comment' defaultValue={nose.comentary} />
                         } else {
                             return <p className='comment'>{nose.comentary} </p>
                     }


                     })} 

        </>
       
    )

}

const mapStateToProps = (state) => {
    return {

        listaComentario: state.comentary.listComentary,
        // auxiliar: state.comentary.auxiliar,
        usuario: state.user.usuario
    }
}

export default connect(mapStateToProps) (Comments)