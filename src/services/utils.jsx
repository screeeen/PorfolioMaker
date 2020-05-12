
export const  handleChange = (project,setProject,event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  
  setProject({ ...project, [name]: value });
}


export const getBase64 = (file) => {
  console.log(file.type);
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}