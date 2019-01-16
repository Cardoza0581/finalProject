import { html, myRender } from 'lit-html';
function fish(){
    return html` 
    <div class="fish-container">
    <div id="navigation">
    <p><strong>Below are a list of the most popular Game Fish and Non Game Fish for Amateur Fishermen located in Missouri. Clicking on the image will take you to
         the Missouri Department of Conservation for more information on the species of fish.</strong></p>
         
   <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/black-bass" target="_blank"> 
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20black-bass.jpg" id="bass-image" class="button"alt="bass">Largemouth Bass</a></button>
    
    <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/bass-temperate" target="_blank">
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20striped-bass.png" id="striped-bass" class="button"alt="striped-bass">Striped Bass</a></button>
    
    <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/goggle-eye-rock-bass-and-warmouth" target="_blank">
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20northern_rock_bass.jpg" id="rock-bass" class="button"alt="Google-eyed Bass">Google-eyed</a></button>
    
    <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/catfish" target="_blank">
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20catfish.jpg" id="catfish-image" class="button"alt="catfish">Catfish</a></button>
    
    <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/trout" target="_blank">
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20rainbow-trout.png" id="trout-image" class="button" alt="trout">Trout</a></button>
    
    <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/sunfish" target="_blank">
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20sunfish.jpg" class="button" alt="panfish">Sunfish</a></button>
    
    <button id="close-image"><a href="https://huntfish.mdc.mo.gov/fishing/species/crappie" target="_blank">
    <img src="https://raw.githubusercontent.com/Cardoza0581/finalProject/master/src/Photos%20for%20School%20Project/Final%20crappie.jpg" id="crappie-image" class="button" alt="crappie">Crappie</a></button>
</div>
</div>
    `;
}

function myRender(){
    return html`
    ${fish()}
    `;
}
render(myRender(),root);