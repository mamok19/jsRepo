let jerusalem; tel_Aviv; acre; katzrin; zikim; musmus; 
const citys = [
     jerusalem = {capital: true, coastal: false, famous: true, ancient: true},
     tel_Aviv = {capital: false, coastal: true, famous: true, ancient: coastal},
     acre = {capital: false, coastal: true, famous: false, ancient: true},


]
function guessCity(capital, coastal, famous, ancient) {
    if (capital && ancient && famous)
    {
        return "Jerusalem"
    }
    if (coastal && famous)
    {
        return "Tel Aviv"
    }
    if (coastal && ancient)
    {
        return "Acre"
    }
    if (ancient)
    {
        return "Katzrin"
    }
    if (coastal)
    {
        return "Zikim"
    }
    if (! (capital && coastal && ancient && famous))
    {
        return "Musmus"
    }
}