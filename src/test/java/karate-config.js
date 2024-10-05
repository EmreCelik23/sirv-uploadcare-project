 function karateConfig() {
  var config = {
    tokenSirv: karate.callSingle('classpath:callables/getTokenForSirv.feature',
        {myClientId: "B2rMR9sIVcjOnjAbamumtrx5pyB", myClientSecret: "fUG+OE2lV6GJ5UOZrrkeMsc6ABb7Mhtuj7mN3OeHKig76xh5K5C2gGypAibgZmbTJa2a9+U1YMVJq8B22kaJjA=="}).response.token,
    pubKeyUploadCare: 'aaf2068f2b9ef7e95245'
  };
  return config;
}