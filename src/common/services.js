import { createAsyncThunk } from "@reduxjs/toolkit"
import axios  from 'axios'

const CryptoJS = require("crypto-js")

const postApiData = (name ,URL) => { 
    return createAsyncThunk(name, async(initialData, myThunkApi) => {
    try{
        const tokenHeader = `Bearer ${getLocalStorage("eldt")?.data?.token ?? ''}`
        const HEADERS = {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization':tokenHeader
            }
        }
        const response = await axios.post(URL, initialData, HEADERS)
        if(response.status === 200){
            return response.data
        }
        else {
            myThunkApi.rejectWithValue(response.message)
        }
    }
    catch(err){
        return myThunkApi.rejectWithValue(err.message)
    }
})
}

const date = new Date()
const passphrase = date.toUTCString().replaceAll(" ","").replaceAll(",","").slice(0,12)

const encryptWithAES = (text) => {
    try{
        return CryptoJS.AES.encrypt(text,passphrase).toString()
    }
    catch(err){
        return null
    }
}
  
const decryptWithAES = (ciphertext) => {
    try {
        let wordsArray = CryptoJS.AES.decrypt(ciphertext,passphrase)
        let originalText = CryptoJS.enc.Utf8.stringify(wordsArray)
        return originalText
    }
    catch(err){
        return null
    }
}

const setLocalStorageAsync = (key, value) => {
    return new Promise((resolve,reject) => {
        try{
            let text = JSON.stringify(value)
            setTimeout(()=> {
                localStorage.setItem(key,encryptWithAES(text))
            },0)            
            resolve()
        }
        catch(error){
            reject("Couldn't save state, "+error)
        }
    })    
}

const getLocalStorage = (key) => {
    let item = localStorage.getItem(key)
    let result = null
    if(item){
        result = decryptWithAES(item)
    }
    if(result){
        return JSON.parse(result)
    }
    else{
        localStorage.removeItem(key)
        return null
    }
}

const isActiveState = (profile) => {
    try{
        let expires = new Date(profile?.data?.expires??Date.now())
        if(expires > Date.now()){
            return true
        }
        else{
            return false
        }
    }
    catch(err){
        console.log(err)
        return false
    }
}

export  { postApiData, getLocalStorage, setLocalStorageAsync, isActiveState }