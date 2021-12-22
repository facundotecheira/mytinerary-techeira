const Activity = require ('../models/ActivityModel')

const activityController ={
  
    addNewActivities : (req, res) => {
        const newActivities = new Activity ({...req.body})
        newActivities.save()
        .then(() => res.json({success:true}))
        .catch((error) => res.json({success:false, response:error}))
    },
    
    getActivieties: async (req, res) => {
        let activity
    
        try {
            activity = await Activity.find()

        } catch (error) {
            console.log(error)
        }
        
        res.json({ response: activity, success: true })
    }

        
}

module.exports=activityController
