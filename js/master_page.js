document.addEventListener('DOMContentLoaded', function(event)
{
   var DropdownMenu1_dropdownToggle = document.querySelectorAll('#DropdownMenu1 .dropdown-toggle');
   DropdownMenu1_dropdownToggle.forEach(item => 
   {
      var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
   });
   var DropdownMenu1_dropdown = document.querySelectorAll('#DropdownMenu1 .dropdown');
   DropdownMenu1_dropdown.forEach(item => 
   {
      item.addEventListener('shown.bs.dropdown', function(e)
      {
         e.currentTarget.classList.add('show');
      });
      item.addEventListener('hidden.bs.dropdown', function(e)
      {
         e.currentTarget.classList.remove('show');
      });
   });
   var Accordion1_items = document.querySelectorAll('#Accordion1 .accordion-collapse');
   Accordion1_items.forEach(item => 
   {
      item.addEventListener('show.bs.collapse', function(e)
      {
         var accordionItem = e.target.closest('.accordion-item');
         accordionItem.classList.add('active');
      });
      item.addEventListener('hide.bs.collapse', function(e)
      {
         var accordionItem = e.target.closest('.accordion-item');
         accordionItem.classList.remove('active');
      });
   });
});
$(document).ready(function()
{
   $("#headerPanelMenu").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: true, display: 'overlay', position: 'left', toggle: true});
   $("#headerPanelMenu_markup ul li a").click(function(event)
   {
       $.panel.hide($("#headerPanelMenu_panel"));
   });
   $('#OverlayMenu1-overlay').overlay({hideTransition:true});
   $('.OverlayMenu1').drilldownmenu({backText: 'Back'});
   $('#OverlayMenu1').on('click', function(e)
   {
      $.overlay.show($('#OverlayMenu1-overlay'));
      return false;
   });
});
