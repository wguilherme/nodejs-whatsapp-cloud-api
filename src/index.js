import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const WHATSAPP_BUSINESS_ACCOUNT_ID = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID
const SYSTEM_USER_ACCESS_TOKEN = process.env.SYSTEM_USER_ACCESS_TOKEN

const api = axios.create({
  baseURL: `https://graph.facebook.com/v13.0/${WHATSAPP_BUSINESS_ACCOUNT_ID}`,
  headers: {
    'Authorization': `Bearer ${SYSTEM_USER_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
})

async function sendWhatsappMessage(){
  
  const messageData = {
    messaging_product: 'whatsapp',
    to: '5522998614590',
    type: 'text',
    text: {
      body: 'Testando WhatsApp Cloud API!!!'
    }
  }
  
  try{
    const response = await api.post('/messages', messageData)
    console.log('response', response.data)
  }catch(error){
    console.error('error', error.message)
  }
}

sendWhatsappMessage()

