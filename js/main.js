// let skills = window.localStorage;



var skills = $('input').val();



$(function() {
    $('#add').on('click', addSkill);
    function addSkill() {
        console.log("hello! I am being run")
        var newSkill = $('#new-skill').val();
        let template = `
        <tr>
        <td><button id="remove" class="btn btn-xs btn-danger">X</button></td>
        <td>${newSkill}</td>
        </tr>
        `;
        $('tbody').append(template);
        
    };  
});
$(function() {
    $('.skills-list tbody').on('click', 'button', function() {
        $(this).closest('tr').remove();
    })

});









