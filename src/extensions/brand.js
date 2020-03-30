module.exports = async toolbox => {
  toolbox.brand = {
    name: toolbox.runtime.brand,
    nameCap: toolbox.runtime.brand.charAt(0).toUpperCase() + toolbox.runtime.brand.slice(1),
    printInTemplate: (logo = false, printContent) => {
      const { divider, newline, success } = toolbox.print

      divider()
      if (logo) toolbox.brand.printLogo()
      newline()
      printContent()
      newline()
      divider()
      newline()
    },
    printLogo: () => {
      toolbox.print.info(`
                   ,a#@@@@@@@@@@@@@@ee,                 ,
               a#@@@@@@@@@@WWWW@@@@@@@@@@@e,          a"
            a@@@@@@W""\`             \`"W@@@@@"       #"
         .#@@@@W"\`                       "^      .#W
       .#@@@@W                                 .#@p
      #@@@@W                                 ,@@@@@W
     #@@@W                                 aW"  %@@@@
    @@@@W                                #W      "@@@@
   #@@@E                              .#W\`        (@@@@
  .@@@@                             ,#W            @@@@b
  #@@@L                           ,@"              (@@@@
  @@@@b                         aW"                 @@@@
  @@@@p                       #W                    @@@@
  @@@@b                    .#W\`                    (@@@@
  (@@@@                  .#W                       #@@@W
   @@@@b               ,@"                        (@@@@
    @@@@p            aW"                         .@@@@b
    \`@@@@M         #W                           ,@@@@L
      @@W^      .#W\`                           #@@@@"
              ,#W                            #@@@@W
            ,@@e                          a@@@@@W-
          aW@@@@@@Me,                 ,e@@@@@@"\`
        #W    "W@@@@@@@@Meeeeaeee#@@@@@@@@W"
     .#\`         \`"WW@@@@@@@@@@@@@@@@WW"^
   ,"                   \`\`""""""\`
      `)
    }
  }
}
