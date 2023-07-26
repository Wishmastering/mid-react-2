Please read through these instructions in full before beginning the exercise.
Ensure to complete each task IN ORDER
Some steps will have multiple requirements.

Refer to result.png to see final result.

1. Update the css to match result.png (don't worry about colours or exact spacing. No need to measure exactly)

   - Set font to any san serif font

<!--  -->
<!-- Arial -->
<!--  -->

- Center the content in the middle of the window, verticaly and horizontally

<!--  -->
<!-- Flex Row -->
<!--  -->

2. The form inputs should be controlled components
      <!--  -->
      <!-- e.target.value & useState/setState on Change -->
   <!--  -->
   - The name field should be required and the email valid (use builtin browser validation )
        <!--  -->
        <!-- type = email & name required  -->
     <!--  -->

- Clicking each label should focus the respective input field
  <!--  -->
  <!-- htmlFor (id on input) -->
  <!--  -->

3. On submit add the resulting user to an array called profileData
   reset the form
   <!--  -->
   <!-- onClick for the form , add data to 'useState' PROFILEDATA & reset inputs  -->
   <!--  -->

4. List all created users beneath the form.
<!-- Map profileData & display below (another component) -->

5. Clicking a user should POST an JSON object with the user's name and email to 'https://jsonplaceholder.typicode.com/posts'.

<!-- on previous map, onClick create POST request, send email & name -->

- add the ID from the response to the user list

<!-- POST Reqeust will return an ID, store it on profileData 'array of objects' -->

You are welcome to reference MDN (or similar) for documentation:
https://developer.mozilla.org/en-US/docs/Web
