let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")

let turno=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

// const checkwinner=()=>{
    // for( let pattern of winPattern){
    //     console.log(pattern[0],pattern[1],pattern[3]);
    //     console.log(
    //         boxes[pattern[0].innerText],
    //         boxes[pattern[1].innerText],
    //         boxes[pattern[2].innerText]
    //     )
    // }
    const checkwinner = () => {
        for (let pattern of winPattern) {
            const [a, b, c] = pattern; // Destructure pattern for easier readability
    
            if (
                boxes[a].innerText !== "" && // Check if the box is not empty
                boxes[a].innerText === boxes[b].innerText && // Check for matching text
                boxes[b].innerText === boxes[c].innerText // Check for matching text
            ) {
                alert(`Player ${boxes[a].innerText} wins!`); // Declare winner
                disableAllBoxes(); // Optional: Disable all boxes after win
                return;
            }
        }
        if (Array.from(boxes).every((box) => box.innerText !== "")) {
            alert("It's a tie!"); // Handle the tie condition
        }
    };
    
    // Helper function to disable all boxes after a winner is found
    const disableAllBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    };
    
//}
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the box text
        box.disabled = false; // Re-enable the boxes
    });
    turno = true; // Reset the turn
});