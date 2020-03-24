// setup the vino views
async function setup() {
    await vinoStart([

        await newView('main', 'main.html'),
        await newView('disc', 'sr2disc.html'),
        await newView('shows', 'sr2shows.html'),
        await newView('shop', 'sr2shop.html')           
    ]);
}
setup();