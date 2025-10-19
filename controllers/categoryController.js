import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../models/category.js";

// 🟩 Create category
export const create = async (req, res) => {
    try {
        const { category } = req.body;
        const newCategory = await createCategory({ category });

        return res.status(200).json({
            message: 'Category is Created',
            data: newCategory
        });
    } catch (err) {
        console.error("Error creating category:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// 🟧 Update category
export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { category } = req.body;

        const updated = await updateCategory(id, { category });

        if (!updated) {
            return res.status(404).json({ message: 'Category Not Found' });
        }

        return res.status(200).json({
            message: "Update Successfully",
            data: updated
        });
    } catch (err) {
        console.error("Error updating category:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// 🟥 Delete category
export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteCategory(id);

        if (!deleted || deleted.length === 0) {
            return res.status(404).json({ message: 'ID not found' });
        }

        return res.status(200).json({
            message: 'Category is Deleted',
            data: deleted
        });
    } catch (err) {
        console.error("Error deleting category:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// 🟦 Get all categories
export const getAll = async (req, res) => {
    try {
        const data = await getAllCategories();

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No categories found" });
        }

        return res.status(200).json({
            message: 'Fetch data successfully',
            data: data
        });
    } catch (err) {
        console.error("Error fetching categories:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// 🟨 Get single category by ID
export const getSingleData = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getCategoryById(id);

        if (!data) {
            return res.status(404).json({ message: "Category not found" });
        }

        return res.status(200).json({
            message: 'Fetch data successfully',
            data: data
        });
    } catch (err) {
        console.error("Error fetching category:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
