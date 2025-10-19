import connection from "../config/db.js";

// model for create location
export const createLocations = async (data) =>{

    // get data from param
    const {name,poscode} = data

    try{
        // query insert data and get back
        const query = connection.from('locations').insert([{name,poscode}]).select();

        // execute query
        const {data,error} = await query

        // if error throw message error
        if(error) throw error;

        // return data back if success
        return data[0]
    }catch(err){

        // catch err if server crash
        console.error("Error creating user:", err);
        throw err;
    }
}

// model for get all location
export const getAllLocation = async () =>{
    try{

        // query get all location from superbase api
        const {data,error} = await connection.from('locations').select('*').order('id',{ascending:true});

        // if error throw message error
        if(error) throw error;

        // return data if successfull
        return data;

    }catch(err){
        // catch err if server crash
        console.error("Error fetching all locations:", err);
        throw err;
    }
}

// model for get all location
export const getLocationById = async (id) =>{

    try{

        // query get only location from superbase api
        const {data,error} = await connection.from('locations').select('*').eq('id',id).single();

        // if error throw message error
        if(error) throw error;

        if (!data)  return null;

        // return data if successfull
        return data;

    }catch(err){
        // catch err if server crash
        console.error("Error fetching all locations:", err);
        throw err;
    }
}


// model for update location
export const updateLocation = async (id,updateData) =>{
    // get new data for update
    const {name,poscode} = updateData;
    try{

        // query update data in superbase while id
        const query = connection.from('locations').update({name,poscode}).eq('id',id).select();

        // execute query
        const {data,error} = await query

        // if error throw error
        if(error) throw error;

        // return data if successfull
        return data[0];
    }catch(err){
        
        // catch err if server crash
        console.error('Error updating locaiont:',err);
        throw err;    
    }
}


// model for delete location
export const deleteLocation = async (id) =>{
    try{

        // query delete data in superbase while id
        const query = connection.from('locations').delete().eq('id',id).select();

        // execute query
        const {data,error} = await query

        // if error throw error
        if(error) throw error;

        // return data if successfull
        return data;
    }catch(err){
        
        // catch err if server crash
        console.error('Error updating locaiont:',err);
        throw err;    
    }
}