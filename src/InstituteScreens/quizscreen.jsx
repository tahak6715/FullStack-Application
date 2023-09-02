import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { KeyboardReturnSharp } from '@mui/icons-material';


export default function QuizScreen(){

    const navv = useNavigate();

    

    
    return(
        <>
        <div className="bg-dark text-primary" style={{height:'538px', margin:'-10px'}}>
        <Paper className='d-flex justify-content-center  border border-dark py-3'>
            <h2>Select The Quiz...</h2>

        </Paper>
        <div className='d-flex'>

        <Paper className='py-3 my-4 mx-4' style={{width: '240px', height: '250px',paddingLeft: '50px' }}>
        <Avatar
  alt="Remy Sharp"
  src="https://learnbatta.com/assets/images/javascript/javascript-logo.png"
  sx={{ width: 140, height:'120px',   }}
/>
<Button onClick={() => navv('/student/quiz_screen')} className='bg-dark text-white border border-dark my-5'>Start The Quiz..</Button>
        </Paper>

        <Paper className='py-3 my-4 mx-4' style={{width: '240px', height: '250px',paddingLeft: '50px' }}>
        <Avatar
  alt="Remy Sharp"
  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIArgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMhAAAQQBAwMDAgQGAwEAAAAAAQACAxEhBBIxQVFhEyJxMoEFkcHRFDOhseHwI0KCUv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAQEBAQEBAQAAAAAAAAAAAAABERIhUQL/2gAMAwEAAhEDEQA/APKITOTgUOyS0gSTQgSaEIBNACdIEkpUjagihS2lG0oIpKe1KkEUKVJUgSaKTQJCdIQBFJJoQJCaEAkmhAJgJtFqxrLTEQDVIMV7Ib6LTHpiei1IlrGIiQpCErps0ZPRaGaE9lrlnpxfQR6C7w0B7J/wB7JyvTz5gKgYSvQnQHsqX6E9lOV1wTGolq7EmiI6LLJpqvCzi6wUktDoqVZaoqpCkQlSBJ0hCBIQnSApSAQArWMViBjFrhgJKs0uldJRAx3XVgighHuLXO8lamMWs+m0Ln9Md+i6UWiiYPfI0fGVQ78RiYaIsfOFQ78REhprW0etLXTOOuz+EZjJ+TSuD9PXtaFxA/ePpH9lJjy1wBeL+VNHbEkfah8BTa+Aj3GvO1clkwBy/jsVqZKytz3GqvKmteN+3Tu6t+RaidJE/wChwPwVUyOKTLQ0/CbodgsW3yFNq4hL+HD/AELmanQEX7SPsuxHrPTFSHd2yrPXglGQE1M+PHT6UhYZIqXs9VoIZgfTIB7Lg6zROid7mkfqrkq7XCc1VkLbLHVrM5vhZaVlJSIUVFAUgEgFaxtohsZZrqtsULY8yc9lCJmzk0e6mSOb+E0XO1RHtbdAdlU2aaV1NFk8dlB0YdlxIBzQWiA0SxpEberippixuje875nijzZpa2wRMv03F+Og5+9rFua6QtEgqr3HIHhTDBFETPMBimtA5/ZNGiRhjZuAb5t9K+KGNzfeKDuvK5cupiD/APhZwBkm8qf8RKRvL/BFrcYrqPigiquPBpT07oZPoz82uQ/VFzCwmiTyOyo9UNoMJoK4j0LtaIn7WFocDn2/qpDXOLC9hL3D/pVFecMpJwSD1NobM5pPucPgpg9O1wnYdwAJ5sfusk0ZhcA2Q2eAOqpb+IaVsIa5r5JKyfKWp1kOojG0Frh+aCT9dKxho4b1VkX4jDqGbJi0k82uawSkU3IdjKzSaOVji7aW54tRpr1ulZZdCbH/AMrkyNWkSPjP1EUlIBOLaKcPyKLPGBwVZVzxRzyqistJtC0x0wdlnBDclLeTyaFpUaZpCOKIUQ4uaNxrPyqzOW2N26xR6ptc3YaJ5vwsrrSHb2e1t1yQEt22geT0VG6nex1AjOeVJhMgAxgYv/CiX1tZG+Mb3xuo8IklLmhkgaM4LTn8li9wd9ZvObVzdo2g17r+FTA0MyWuvHkIMh8JMBL3bakI4JVTidxuh44W5WbFlHlMfmqmukNht+QpCd1tHUde63rOJ8hImzgf1UpIJLBrJzQK0aaDc1hHueTkA1Q7pooPqUPYRtzY/dEYe54w7HY0t+yOw15IeOq0RaSMNw+29OiGsMe8Yk2Ac0MlajNY+scZ8oEDZHW6gzNd1m1sccTQWuNnr3WVgc2IvJx4yseoL4320nb3VJe9hy40UnvoU69pUbhSO9TJGf7qh3KuFG6KqkabsZUVAv78JlwI5VNp2gsHm077FVgpgqIv9KTburHytn8rTB7n7pXjAv6R/v6LMd40rCx3sv3+D5+1Kkv3MHII63hTFWNke0OA+k4I6K/2egwtJJPI/wB+Ssvuc3pj+qnFV24kC8tCo26ckSM2sLXOOByD4UNZPIJ3j6KOQ3AB444Sn1PqSGG/+JpuP20fA8KskNcBu9hoOHVSFiMTwLLj5ruh+osOAoA9lXIAPey9vnuoOaAB36rbK1k1Ydkdlqh1rxJ7A0Hw3lc8MNbqxdLZpAwN3EAk492QlpjdG58gc6R2D2xS1HUMbDbCS0Clhkbs91UDnHTossmopxA4SXS/lpl1wkBbZBWSSZ5P1bgMUchQLrySCoYvlaQ99Cj/AFS3gtqgk4ilXyo1Em4JslWAhVUXHFmgiyPqBWVUItCEDTCimiLPUOwt5BIOfv8AunAAS4EXQvmlWpRSvhkD43OY7u00VFWsf6coeMUbFK5xgfHI97n+rdt7G+b6qOpaCxkoJIfkknk9f3+6zl18WB2tQapJmSwtiDK2j2m/+1i/t4Vmn0znxOlklbbfpbgkngfbIWBSDnck38q4aC4l/uAx0QXAjonqJ3TkF5twxfhVBBphG93vugOisbKW21mGnoVXBqZWD02PIBvA88q1kRDnkOstFgDrwhjTA4kgPcGtd7S6iQFlnjAeS3jt2TLi5oIa7wbxhHq7rLgMnk/osqz3WEwVN7R7gNoIwq3NLFuVnATajdFMNLgTYFC8lQ3K6Yt3bhTRR6+VcyG4gXVzXFrMCNtjkcrRBqHAFxBcevVZrUYEISVRJCSLQWPcC6wPy4USopoLxI70QN1ACqA89VAZ61WVDcQCBwkoJhwBSc++MDooWi0DTUbTtA7W3TPc9koLxltbe+Rx5WFWQuDX244HQjlKq81uxkDshz2slNk4GKPP+EmuIyQHgdDfCi57TTi63c13UFsM3pBz2f8Aq6Nf4SdqInYDKsVnoe+Fkc6/joEkwTcS5xrITYQHBRacFMtpgPdVE5GtYaBJPfj4TjIH1BVtr6j+S2aZ2la+9UZKIxs5/qiuchCFUNCEIAJlCEAhCECSQhQNCaFQKUX8wfKEKKuGQPlVTfzChCCCSaEROP6X/H7Kxg9zPshCKpP1fdN/1fZCEH//2Q=="
  sx={{ width: 140, height:'120px',   }}
/>
<Button onClick={() => navv('/student/quiz_screenn')} className='bg-dark text-white border border-dark my-5'>Start The Quiz..</Button>
        </Paper>

        </div>

        </div>
        
        </>


    );
}