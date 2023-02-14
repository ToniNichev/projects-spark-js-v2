export default { 
  '/about' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "About",
            props: {}
          }
        ] 
      }         
    ]    
  },
  '/words' : {
    template: "Html",              
    layout: [ 
      {
        span: [0],
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: [70,30],
        components:[
          {
            name: "Words",
            props: {}
          },
          {
            name: "LeftRail",
            props: {}
          },          
        ] 
      },        
    ]
  },  
  '/home' : {
    template: "Html",              
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "Home",
            props: {}
          }
        ] 
      },        
    ]
  },
  '/setup' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,        
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "Setup",
            props: {}
          }
        ] 
      },        
    ]
  },
  '/other-template' : {
    template: "OtherHtml",      
    layout: [ 
      {
        span: 12,
        components:[
          {
            name: "Greetings",
            props: {}
          }
        ] 
      },        
    ]
}    
}
