// Some Helpful Resources:

Adding Linear Radient Overlay on Backrgound Images
https://webdevetc.com/blog/how-to-add-a-gradient-overlay-to-a-background-image-using-just-css-and-html/ 

Image: 
from Unsplash 

Photo by <a href="https://unsplash.com/@davide_pietralunga?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Davide Pietralunga</a> on <a href="https://unsplash.com/photos/seashore-under-blue-sky-9pqY53MCQcY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      

Table Styling & Making It Responsive
https://speckyboy.com/responsive-html-table-techniques/ 
https://www.digitalocean.com/community/tutorials/how-to-style-a-table-with-css 

Working with styling tables in HTML/CSS:
https://siongui.github.io/2017/04/10/css-select-first-row-of-table/ 

Created smoother transitions between gradients in CSS: 
https://teamtreehouse.com/community/how-do-we-create-a-repeating-gradient-with-smoother-color-transitions#:~:text=In%20order%20to%20create%20a,so%20they%20can%20connect%20seamlessly. 


Issues with Flask and needing a different port: 
1. Identify the program using port 5000 to get PID 
lsof -i :5000 
2. Kill/Terminate current process
Run this in the terminal: kill -9 <PID>  -- only for MAC 
3. Restrart Flask app 
run python app.py or python3 app.py