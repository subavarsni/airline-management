import supabase from './supabase.js';
import dotenv from 'dotenv';
dotenv.config(); 

console.log(process.env.SUPABASE_KEY);  

async function testConnection() {
  const { data, error } = await supabase.auth.signUp({
    email: 'subavarsni@gmail.com',
    password: 'password123',
  });

  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Success:', data);
  }
}

testConnection();
