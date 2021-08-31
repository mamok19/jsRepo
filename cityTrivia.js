function guessCity(capital, coastal, famous, ancient) {
    if (capital && ancient && famous)
    {
        return "Jerusalem";
    }
    if (coastal && famous)
    {
        return "Tel Aviv";
    }
    if (coastal && ancient)
    {
        return "Acre";
    }
    if (ancient)
    {
        return "Katzrin";
    }
    if (coastal)
    {
        return "Zikim";
    }
    if ((!capital && !coastal && !ancient && !famous))
    {
        return "Musmus";
    }
    return "none of the above";
}
console.log(guessCity(false, false, true, false));