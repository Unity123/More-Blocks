(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.get-external-data = function(address, type, callback){
      $.ajax({url: address, dataType: type, success: function(data){
        callback(data);
      }});
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['R', 'get external data with address %s and type %t', 'get-external-data', '', '']
        ]
    };

    // Register the extension
    ScratchExtensions.register('More Blocks', descriptor, ext);
})({});
