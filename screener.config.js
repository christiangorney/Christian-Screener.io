module.exports = {
  // full repository name for your project:
  projectRepo: 'christiangorney/Christian-Screener-io',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,

  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.
  states: [
    {
      url: 'http://paerscba0695/pacrs-qa5/Home.aspx',
      name: 'PACRS QA5 HOME'
    },
    {
      url: 'http://paerscba0695/pacrs-qa5/ContactReport.aspx',
      name: 'PACRS QA5 CONTACTS-DETAILS'
    }
  ]
};
