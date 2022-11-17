import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 375px;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    img {
        width: 147px;
        height: 50px;
    }
    p {
        color: #52B6FF;
        font-weight: 400;
        font-size: 14px;
        margin-top: 25px;
    }
    a {
        text-decoration: none;
    }
`
export const LoginForm = styled.form`
     font-family: 'Lexend Deca', sans-serif;
     display: flex; 
     flex-direction: column;
     justify-content: center;
     width: 303px;
     input {
         height: 45px;
         border: 1px solid #D4D4D4;
         border-radius: 5px;
         margin-bottom: 6px;
         ::placeholder {
             font-family: 'Lexend Deca', sans-serif;
          color: #DBDBDB;
          font-size: 20px;
         }
     }
     button {
         font-family: 'Lexend Deca', sans-serif;
         height: 45px;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 4.5px;
         background-color: #52B6FF;
         font-size: 21px;
         color: #fff;
         img {
            width: 40px;
            height: 40px;
            color: white;
         }
     }
`
export const mainContainer = styled.div `
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 300px;
    }
`