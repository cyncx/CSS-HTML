## HTML
Use the following HTML for the structure of expanding boxes in the page

```html
<div class="expand-container">
  <h3>An expanding box</h3>
  <p>Click on the button to show the hidden text</p>
  <div class="expand-content">
    <p>Dolore tenderloin leberkas quis. Ground round ipsum est salami nisi. Tongue pancetta eiusmod adipisicing proident ham hock culpa turducken. Frankfurter ham hock labore cupim, qui aute pariatur magna. Fatback eu turducken ham hock, adipisicing flank jowl. Meatloaf in proident sed leberkas, turkey sint irure pastrami nulla aute qui capicola ipsum. Ea pork loin quis et.</p>
  </div>
  <a class="expand-btn" data-ease="swing" data-speed="600">
    Read More
  </a>
  <div class="minimize">
    Read Less
  </div>
</div>
```
##CSS
Add the following CSS to stop the text 'popping' when the expanding box opens

```css
.expand-content p {
  margin-top: 0;
}
```