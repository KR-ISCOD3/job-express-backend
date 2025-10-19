import { createLocations, deleteLocation, getAllLocation, getLocationById, updateLocation } from "../models/location.js";

// function create location
export const create = async (req,res)=>{
    try{

        const {name,poscode} = req.body;
        const location = await createLocations({name,poscode});

        return res.status(200).json({
            message:'Location is Created',
            data: location
        })

    }catch(err){
        return res.status(500).json({message:"Internal Server Error"});
    }
}

// function update location
export const update = async (req,res) =>{
    try{
        const {id} = req.params;
        const {name, poscode} = req.body;

        const updateResponse = await updateLocation(id,{name,poscode});

        if(!updateResponse){
            return res.status(404).json({message: 'Location Not Found'});
        }

        return res.status(200).json({
            message:"Update Successfully",
            data: updateResponse
        })
    }catch(err){
        console.error("Error updating location:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// function delete
export const destroy = async (req,res) => {
    try{
        const {id} = req.params;
        const deleteResponse = await deleteLocation(id);

        if(!deleteResponse){
            return res.status(404).json({message:'ID not found'});
        }

        return res.status(200).json({
            message:'Location is Deleted',
            data: deleteResponse
        })
    }catch(err){
        console.error("Error delete location:", err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

// function get All
export const getAll = async (req,res) =>{
    try{

        const data = await getAllLocation();

        if(!res){
            return res.status(404).json({message:"Location not founds"});
        }

        return res.status(200).json({
            message:'Fetch data successfully',
            data: data
        })

    }catch(err){
        console.error("Error delete location:", err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

// function get single data
export const getSingleData = async (req,res) =>{
    try{

        const {id} = req.params
        const data = await getLocationById(id);

        if(!data){
            return res.status(404).json({message:"Location not founds"});
        }

        return res.status(200).json({
            message:'Fetch data successfully',
            data: data
        })

    }catch(err){
        console.error("Error delete location:", err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}