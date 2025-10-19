import connection from "../config/db.js";

// 🟩 Create a new category
export const createCategory = async (data) => {
    const { category } = data;

    try {
        // Insert category and return the new record
        const query = connection
            .from('categories')
            .insert({ category })
            .select();

        const { data: result, error } = await query;

        if (error) throw error;

        return result[0];
    } catch (err) {
        console.error("Error creating category:", err);
        throw err;
    }
};

// 🟦 Get all categories
export const getAllCategories = async () => {
    try {
        const { data, error } = await connection
            .from('categories')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        return data;
    } catch (err) {
        console.error("Error fetching categories:", err);
        throw err;
    }
};

// 🟨 Get category by ID
export const getCategoryById = async (id) => {
    try {
        const { data, error } = await connection
            .from('categories')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) return null;

        return data;
    } catch (err) {
        console.error("Error fetching category by ID:", err);
        throw err;
    }
};

// 🟧 Update category
export const updateCategory = async (id, updateData) => {
    const { category } = updateData;

    try {
        const query = connection
            .from('categories')
            .update({ category })
            .eq('id', id)
            .select();

        const { data, error } = await query;

        if (error) throw error;

        return data[0];
    } catch (err) {
        console.error("Error updating category:", err);
        throw err;
    }
};

// 🟥 Delete category
export const deleteCategory = async (id) => {
    try {
        const query = connection
            .from('categories')
            .delete()
            .eq('id', id)
            .select();

        const { data, error } = await query;

        if (error) throw error;

        return data;
    } catch (err) {
        console.error("Error deleting category:", err);
        throw err;
    }
};
