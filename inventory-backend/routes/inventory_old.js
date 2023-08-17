const express = require("express");
const router = express.Router();

// Sample inventory data (replace with your database interactions)
let inventory = [
    {
      id: 1,
      name: 'Sodium Bromide',
      quantity: 100,
      manufacturingDate: '2023-01-01',
      expirationDate: '2024-01-01',
      isExpired: false
    },
    {
      id: 2,
      name: 'Chemical X',
      quantity: 50,
      manufacturingDate: '2023-03-15',
      expirationDate: '2024-03-15',
      isExpired: false
    },
    {
      id: 3,
      name: 'Acidic Solution',
      quantity: 75,
      manufacturingDate: '2023-02-10',
      expirationDate: '2024-02-10',
      isExpired: false
    },
    {
      id: 4,
      name: 'Hydrogen Peroxide',
      quantity: 120,
      manufacturingDate: '2023-04-20',
      expirationDate: '2024-04-20',
      isExpired: false
    },
    {
      id: 5,
      name: 'Ammonium Chloride',
      quantity: 90,
      manufacturingDate: '2023-05-05',
      expirationDate: '2024-05-05',
      isExpired: false
    }
  ];

  //create a new inventory item
  router.post("/items", (req, res)=>{
    const newItem = req.body;
    inventory.push(newItem);
    res.status(201).json({message: "Item added sucessfully", item: newItem});
  });

  //Read all inventory items

  router.get("/items",(req, res)=>{
    res.json(inventory);
  });

  //read specific item
  router.get("/items/:id", (req, res)=>{
    const itemId = parseInt(req.params.id);
    const item = inventory.find(item => item.id === itemId);
    if(!item){
        res.status(404).json({message: "Item not found"});
    }else{
        res.json(item)
    }
  });


  //update an inventory ITEM BY id
  router.put("/item/:id", (req, res)=>{
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    console.log(updatedItem);
    const index = inventory.findIndex(item => item.id === itemId);
    if(index === -1){
        res.status(404).json({message: "item not found"})
    }else{
        inventory[index] = {...inventory[index], ...updatedItem};
        res.json({message: "Item updated successfully", item: inventory[index]})
    }
  });

  //delete an inventory item by ID
  
  router.delete("/items/:id", (req, res)=>{
    const itemId = parseInt(req.params.id);
    inventory = inventory.filter(item => item.id !== itemId);
    res.json({message: "Item deleted successfully"})
  });

  module.exports = router