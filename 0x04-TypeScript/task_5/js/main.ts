interface MajorCredits {
    __brand: "MajorCredits.credits";
    credits: number;
};

interface MinorCredits {
    __brand: "MinorCredits.credits";
    credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

const forty_five: MinorCredits = { credits: 45 } as MinorCredits;
const fity_four: MajorCredits = { credits: 76 } as MajorCredits;

// sumMinorCredits(forty_five, fity_four); // Will error out because the function expects two MinorCredits types
