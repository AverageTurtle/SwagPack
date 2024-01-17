PlayerEvents.loggedIn(event => { 
    event.server.runCommandSilent(`effect give @p minecraft:mining_fatigue 1`)
})