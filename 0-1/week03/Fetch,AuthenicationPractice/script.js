const zod=require("zod");

function validateInput(obj) {

  const schema =zod.object({
    name: zod.string().min(1).max(50),
    age: zod.number().min(1).max(100),
    email: zod.string().email().min(5).max(50),
    phone: zod.string().regex(/^\d{10}$/),
    address: zod.string().min(5).max(100),    
    city: zod.string().min(1).max(50),
    state: zod.string().min(1).max(50),
    country: zod.string().min(1).max(50),
    zip: zod.string().regex(/^\d{5}$/), 
    dob: zod.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    password: zod.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/),
    confirmPassword: zod.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/),      

})

const response = schema.safeParse(obj);
console.log(response);

if(!response.success) {
  console.log("Validation failed:", response.error.format());
  return;
}
};

validateInput({
  name: "John Doe",
  age: 30,
  email: "marimuthusanthoshh@gmail.com",
  phone: "1234567890",  
  address: "123 Main St",
  city: "New York",
  state: "NY",
  country: "USA",
  zip: "12345",
  dob: "1990-01-01",  
  password: "Password123",
  confirmPassword: "Password123", 
})
