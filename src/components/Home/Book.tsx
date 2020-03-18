import * as React from 'react'
import styled from 'styled-components'

const BookContainer = styled.div`
  $peter-river:#3498db;
  $clouds:#ecf0f1;

  top: 50%;
  transform: translateY(-50%);
  position:relative;
  margin:0 auto;
  border:5px solid $clouds;
  width:100px;
  height:60px;
  div {
    position:absolute;
    left:50%;
    top:-5px;
    margin:0 auto;
    border-top:5px solid $clouds;
    border-bottom:5px solid $clouds;
    border-right:5px solid $clouds;
    background:$peter-river;
    width:50px;
    height:60px;
    transform-origin:0% 50%;
    animation:flip 1.2s infinite linear;
    animation-fill-mode:forwards;
    &:first-child { 
      z-index:-1;
      animation-delay: 5s;
    }
  }
  
  @keyframes flip {
    0%{
        transform: perspective( 600px )
        rotateY( -0deg );
    }
    
    20%{
      background:darken($peter-river,10%);
    }
    
    29.9%{
        background:darken($peter-river,10%);
    }
    30%{
        transform: perspective( 200px )
        rotateY( -90deg );
        background:$peter-river;
    }
    
    54.999%{
      opacity:1;
    }
    55%{
      opacity:0;
    }
    
    60%{
      transform: perspective( 200px )
      rotateY( -180deg );
      background:$peter-river;
    }
    
    100%{
      transform: perspective( 200px )
      rotateY( -180deg );
      background:$peter-river;
    }
}
`
const Book: React.FC = () => (
  <BookContainer>
    <div>
      <h1>page1</h1>
      <p>해리포터</p>
    </div>
    <div>
      <h1>page2</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, tenetur.</p>
    </div>
  </BookContainer>
)

export default Book
