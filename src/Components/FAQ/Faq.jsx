import React, { useState } from 'react'
import './Faq.css'
import image from '../Assets/Images/railway-logo.png'

const Faq = () => {
    const [activesection, setactivesection] = useState(0)

    const faq = [
        {
        id: 1,
        question:  'WHAT IS LOREM IPSUM',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown   printer took a galley of type and scrambled it to  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum."
    }, 
        {
        id: 2,
        question:  'WHY DO WE USE IT?',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown   printer took a galley of type and scrambled it to  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum."
    }, 
        {
        id: 3,
        question:  'WHERE DOES IT COME FROM?',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown   printer took a galley of type and scrambled it to  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum."
    }, 
        {
        id: 4,
        question:  'WHERE CAN I GET SOME?',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown   printer took a galley of type and scrambled it to  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum."
    }, 
    ]

  return (
    <div className="register-container">
    <div className="logo-title">
    <img src={image} style={
        {
            width:"93px",
             height: "90px"
        }
      } alt=''> 
      </img>
      <h3>Gilbert<br/>Railway Corporation</h3>
    </div>
    
     <h1 style={{
      fontFamily: 'katibeh',
      fontSize: '50px',
      textAlign: 'center'
     }}>Frequently asked Questions</h1>
    <div className='faqcontainer'>
     {
//                 activesection == 1 ?
//         <div className='faq'>
//     <div className='faqhead'>
//     <h1>What is a train management system?</h1>
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
//     onClick={() => setactivesection(0)}
//     >
//     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//     </svg>

//     </div>
//     <div className='faqbody'>
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//      Lorem Ipsum has been the industry's standard 
//      dummy text ever since the 1500s, when an unknown 
//      printer took a galley of type and scrambled it to
//       make a type specimen book. It has survived not only five centuries, but also the leap
//        into electronic typesetting, remaining essentially unchanged. It was popularised in the
//         1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
//     with desktop publishing software like Aldus
//      PageMaker including versions of Lorem Ipsum.
//      </p>
//     </div>
//     </div> 
//         :
//         <div className='faq'>
//     <div className='faqhead'>
//     <h1>What is a train management system?</h1>
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
//      onClick={() => setactivesection(1)}
//     >
//     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//   </svg>
  

//     </div>
//     </div> 
     }

   {
    faq.map((item, index) => {
        return (
            activesection == item.id ?
            <div className='faq'>
                <div className='faqhead'>
                 <h1>
                 {item.question}
                 </h1>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
             onClick={() => setactivesection(0)}
                >
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
            
                </div>
                 <div className='faqbody'>
                 <p>
                 {item.answer}
                  </p>
                 </div>
                 </div> 

                 :
                 <div className='faq'>
                      <div className='faqhead'>
                      <h1>{item.question}</h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(item.id)}
                     >
                     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                   </svg>
                   
                 
                     </div>
                     </div>     
        )
    })
   }

  
    </div>
    </div>
  )
}

export default Faq
