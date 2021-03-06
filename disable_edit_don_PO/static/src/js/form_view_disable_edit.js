openerp.disable_edit_don_PO = function(instance, local) {
    var instance = openerp;
    var FormView = instance.web.FormView;

    // override load_record
    FormView.include({
        load_record: function(record) {
        // disable only for purchase.order
        if (record){
            if (this.model == 'purchase.order' & _.contains(['done', 'cancel'], record.state)){
                    $('button.oe_form_button_edit').hide()
                }else {
                    $('button.oe_form_button_edit').show()
                }
        }
        // call super
        return this._super(record);
        }
    });
}