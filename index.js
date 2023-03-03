

let form = document.querySelector('form'); 
const API_KEY = 'sk-xxxxxxxxxxxxxxxxxxxxx';
const url = 'https://api.openai.com/v1/completions';

form.addEventListener('submit', submitQuestion) 


function submitQuestion(e) {
  e.preventDefault(); 
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:  document.getElementById('question').value,
      max_tokens: 200,
      temperature: 0.7,
    })
  }

  fetch(url, requestOptions) // time taking => promise
  .then(
    (response)=> response.json() // time taking => promise
  )
  .then(
    (data) => {
      console.log(data)
      console.log(data.choices[0].text)
      document.getElementById('answer').innerText = data.choices[0].text
    }
  )




  .then((data)=>{})


  
  


}


// voice to text api => text => text completion apis => respose  => show  

// voice to text api => text => image completion apis => respose  => show 

// voice + chagpt apis  =>https://platform.openai.com/docs/api-reference/chat/create => multople chat




