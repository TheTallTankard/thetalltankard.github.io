class ScoreModes {

    static PointBuy = "Point buy";
    static StandardArray = "Standard array";
    static Roll4D6DropLowest = "Roll scores";

    static PointBuyDesc = "Select a score between 8 and 15 for each ability.  Each value has a cost, and your total cost must not exceed the limit.";
    static StandardArrayDesc = "An array of numbers [8, 10, 12, 13, 14, 15] are given.  Assign one to each ability.  No two abilities may have the same value.";
    static Roll4D6DropLowestDesc = "For each ability 4D6 will be rolled.  The lowest of the four rolls is dropped, and the remaining three are added together.  The sum is the ability score.";

}

export default ScoreModes;