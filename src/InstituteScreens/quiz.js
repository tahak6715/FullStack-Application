import { Box, Button, Typography, Paper} from "@mui/material";
import { useEffect, useState } from "react";
import { GetDataById, PostingOfData } from "../config/firebasemethods";
import Grid from '@mui/material/Grid';
import BasicModal from "../componentss/modal";
import { useLocation } from "react-router-dom";


export default function QuizApp(){
    

    

        const [model,setModel] = useState(
            [
                {
                    "question": "What temperature does water boil at?",
                    "optionA": "50 degrees Celcius",
                    "optionB": "25 degrees Celcius",
                    "optionC": "100 degrees Celcius",
                    "optionD": "150 degrees Celcius",
                    "answer": "100 degrees Celcius"
                },
            
                {
                    "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
                    "optionA": "Wole Soyinka",
                    "optionB": "William Shakespeare",
                    "optionC": "Ngozi Chimamanda Adichie",
                    "optionD": "Dan Brown",
                    "answer": "William Shakespeare"
                },
            
                {
                    "question": "What did the crocodile swallow in Peter Pan?",
                    "optionA": "A Book",
                    "optionB": "A Computer",
                    "optionC": "A pair of shoes",
                    "optionD": "Alarm Clock",
                    "answer": "Alarm Clock"
                },
            
                {
                    "question": "Which is the only mammal that can’t jump?",
                    "optionA": "Dog",
                    "optionB": "Elephant",
                    "optionC": "Goat",
                    "optionD": "Lion",
                    "answer": "Elephant"
                },
            
                {
                    "question": "Who lived at 221B, Baker Street, London?",
                    "optionA": "Tony Stark",
                    "optionB": "Morgan Freeman",
                    "optionC": "Sherlock Holmes",
                    "optionD": "Samuel L. Jackson",
                    "answer": "Sherlock Holmes"
                },
            
                {
                    "question": "What colour is a panda?",
                    "optionA": "Green and Yellow",
                    "optionB": "Blue and Red",
                    "optionC": "Green and White",
                    "optionD": "Black and White",
                    "answer": "Black and White"
                },
            
                {
                    "question": "Where is the smallest bone in the human body?",
                    "optionA": "The Chest",
                    "optionB": "The Ear",
                    "optionC": "The Legs",
                    "optionD": "The Hands",
                    "answer": "The Ear"
                },
            
                {
                    "question": "What does the roman numeral C represent?",
                    "optionA": "100",
                    "optionB": "10",
                    "optionC": "10,000",
                    "optionD": "1,000,000",
                    "answer": "100"
                },
            
                {
                    "question": "What takes place in Hong Kong's Happy Valley?",
                    "optionA": "Chicken Wrestling",
                    "optionB": "Horse racing",
                    "optionC": "Street Racing",
                    "optionD": "Arm Wrestling",
                    "answer": "Horse racing"
                },
            
                {
                    "question": "Who painted the Mona Lisa?",
                    "optionA": "Alexander Graham Bell",
                    "optionB": "Sir Isaac Newton",
                    "optionC": "Leonardo Da Vinci",
                    "optionD": "Albert Einstein",
                    "answer": "Leonardo Da Vinci"
                },
            
                {
                    "question": "What’s the most important book in the Moslem religion?",
                    "optionA": "The Koran",
                    "optionB": "The Dictionary",
                    "optionC": "The Bible",
                    "optionD": "The Chemistry text Book",
                    "answer": "The Koran"
                },
            
                {
                    "question": "What’s the capital of Ethiopia?",
                    "optionA": "Cape Town",
                    "optionB": "San Francisco",
                    "optionC": "Abuja",
                    "optionD": "Syndey",
                    "answer": "Addis Ababa"
                },
            
                {
                    "question": "How many squares are there on a chess board?",
                    "optionA": "128",
                    "optionB": "64",
                    "optionC": "32",
                    "optionD": "256",
                    "answer": "64"
                },
            
                {
                    "question": "Who invented the electric light bulb?",
                    "optionA": "Tom Cruise",
                    "optionB": "Barack Obama",
                    "optionC": "Wole Soyinka",
                    "optionD": "Thomas Edison",
                    "answer": "Thomas Edison"
                },
            
                {
                    "question": "What are the first three words of the bible?",
                    "optionA": "be with everyone",
                    "optionB": "Again Jesus asked",
                    "optionC": "In the beginning",
                    "optionD": "At that time",
                    "answer": "In the beginning"
                }
            ]
        );

        console.log(model);
        let SendFormDataaay = () => {
            const nodeName = "QuizApp"
            console.log(model)
    
           PostingOfData(nodeName, model)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
    
        }
        

        const [value,CurrentValue] = useState([{}]);

        let GetDataOfQuiz = () => {
            const nodeName = "JavaaScript"
            GetDataById(nodeName)
            .then((res) => {
              // console.log(res);
              CurrentValue([...res])
              console.log(value)
              return value;
              
              
              })
              .catch((err) => {
                console.log(err);
              });
          };
        
          console.log(value)
          useEffect(() => {
            
            GetDataOfQuiz();
         }, []);

         const [currentQuestion, setCurrentQuestion] = useState(0);
         function handleNextQuestion() {
            if(currentQuestion<10){
            setCurrentQuestion(currentQuestion + 1);
            }
            else{
                setCurrentQuestion(currentQuestion + 0);

            }

          }



          const [marks, setMarks] = useState(0);

          

          
          let isLastObject =  value.length - 1 === currentQuestion
          console.log(currentQuestion);
          console.log(value.length)
             
            


          


          function Click(options) {
            handleNextQuestion();
            console.log(value[currentQuestion].Answer);
            if (options === value[currentQuestion].Answer) {
              // the clicked option is correct
              console.log('Correct!');
              setMarks(marks + 10);
              console.log(marks);

            } else {
              // the clicked option is incorrect
              console.log("wrong");
              console.log(marks);

            }
          }
         

          



        return(
        
        <>
        {/* <Box>
            <Typography>
                {value.map((item) => (
                    <>
                    <h1>{item.Answer}</h1>
                    
                    </>
                ))}

            </Typography>
        </Box> */}

        <Box style={{textAlign:'center'}}>
            <Paper className="bg-dark py-5" style={{height:'538px', margin:'-10px'}}>
                <h1 style={{fontFamily:'inherit', textAlign:'center'}} className="text-primary">Quiz App...</h1>

                <Paper className="py-3 my-5 px-3 bg-primary border border-dark rounded-circle" style={{width:'750px', marginLeft:'170px'}}>
                    <h5>Q :{value[currentQuestion].Question}</h5>

                </Paper>
                {/* <Button className="bg-white text-dark py-2 px-5 font-weight-bold rounded-circle" onClick={() => Click(value[currentQuestion].optionA)}>{value[currentQuestion].OptionA}</Button>
            <Button className="bg-white text-dark py-2 px-5" onClick={() => Click(value[currentQuestion].optionB)}>{value[currentQuestion].OptionB}</Button>
            <Button className="bg-white text-dark py-2 px-5" onClick={() => Click(value[currentQuestion].optionC)}>{value[currentQuestion].OptionC}</Button>
            <Button className="bg-white text-dark py-2 px-5" onClick={() => Click(value[currentQuestion].optionD)}>{value[currentQuestion].OptionD}</Button>  */}


<Grid container spacing={2}>
  <Grid item xs={6}>
    <Button  disabled={isLastObject} className="bg-primary text-dark py-2 px-5 font-weight-bold rounded-circle" onClick={() => Click(value[currentQuestion].OptionA)}>{value[currentQuestion].OptionA}</Button>
  </Grid>
  <Grid item xs={6}>
    <Button disabled={isLastObject} className="bg-primary text-dark py-2 px-5 font-weight-bold rounded-circle" onClick={() => Click(value[currentQuestion].OptionB)}>{value[currentQuestion].OptionB}</Button>
  </Grid>
  <Grid item xs={6}>
    <Button disabled={isLastObject} className="bg-primary text-dark py-2 px-5 font-weight-bold rounded-circle" onClick={() => Click(value[currentQuestion].OptionC)}>{value[currentQuestion].OptionC}</Button>
  </Grid>
  <Grid item xs={6}>
    <Button disabled={isLastObject} className="bg-primary text-dark py-2 px-5 font-weight-bold rounded-circle" onClick={() => Click(value[currentQuestion].OptionD)}>{value[currentQuestion].OptionD}</Button>
  </Grid>
  
</Grid>

<h1>
    <BasicModal num={marks} ques={value.length-1} TotalMarks={(value.length-1)*10} per={(marks/((value.length-1)*10))*100}/>
</h1>


            </Paper>
        </Box>



        <div>
    <h2>
        
           {/* <h1>{value[0].Question}</h1> */}
          {/* <h1>{value[0].Question}</h1> */}
             {/* <h1>{value[currentQuestion].Question}</h1> 
            <Button onClick={() => Click(value[currentQuestion].optionA)}>{value[currentQuestion].OptionA}</Button>
            <Button onClick={() => Click(value[currentQuestion].optionB)}>{value[currentQuestion].OptionB}</Button>
            <Button onClick={() => Click(value[currentQuestion].optionC)}>{value[currentQuestion].OptionC}</Button>
            <Button onClick={() => Click(value[currentQuestion].optionD)}>{value[currentQuestion].OptionD}</Button> */}
            
        

        
    </h2>
    
    
  </div>
        
        
        </>
    );
}