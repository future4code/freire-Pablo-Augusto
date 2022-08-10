function DNA2RNA(dna: string): string {
    const rna: string = dna.replace(/A|T|G|C/gi, (base: string):string => {
        switch(base.toUpperCase()) {
            case "A":
                return "U"
            case "T":
                return "A"
            case "G":
                return "C"
            case "C":
                return "G"
            default:
                return " "
        }
    })
    return rna
}

console.log(DNA2RNA("ATT GCT GCG CAT TAA CGA CGC GTA"))