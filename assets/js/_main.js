/**
 *  Main config file for require.js file loader.
 *
 *  @author   Tim George <tim@timrgeorge.com>
 *  @version  1.0
 *
 **/

requirejs.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
  baseUrl:          '/assets/js/libs',
  paths: {
    app:            '/assets/js/app', 
    jquery:         [
                      'jquery-3.1.1.min',
                      '//code.jquery.com/jquery-3.1.1.min',
                      '//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min'
                    ]
  }
});
