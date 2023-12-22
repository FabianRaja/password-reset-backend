import { ObjectId } from "mongodb";
import { client } from "../../db.js";

export function getAllData(){
    return client.db("Password-Reset").collection("data").find({}).toArray();
}

export function addUser(user){
    return client.db("Password-Reset").collection("data").insertOne(user);
}

export function checkUser(email){
    return client.db("Password-Reset").collection("data").findOne({email});
}

export function loginUser(email,password){
    return client.db("Password-Reset").collection("data").findOne({email,password});
}

export function addString(id,string){
    return client.db("Password-Reset").collection("data").findOneAndUpdate({_id:new ObjectId(id)},{$set:{string}});
}

export function findingUser(string){
    return client.db("Password-Reset").collection("data").findOne({string});
}

export function resettingPassword(id,password){
    return client.db("Password-Reset").collection("data").findOneAndUpdate({_id:new ObjectId(id)},{$set:{password:password}});
}

export function deletingString(id){
    return client.db("Password-Reset").collection("data").findOneAndUpdate({_id:new ObjectId(id)},{$set:{string:"empty"}});
}
