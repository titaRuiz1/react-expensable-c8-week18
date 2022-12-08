import { parseISO } from "date-fns";
import { BsFillCartFill } from "react-icons/bs";
import { RiBankFill, RiBillFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaGraduationCap, FaGamepad } from "react-icons/fa";
import { AiFillCar, AiFillGift } from "react-icons/ai";

import { colors } from "../../styles";

const categoryColors = {
  red: colors.red[500],
  orange: colors.orange[500],
  yellow: colors.yellow[500],
  green: colors.green[500],
  teal: colors.teal[500],
  cyan: colors.cyan[500],
  "light-blue": colors.lightBlue[500],
  blue: colors.blue[500],
};

const categoryIcons = {
  bank: RiBankFill,
  cart: BsFillCartFill,
  health: GiHealthNormal,
  game: FaGamepad,
  bill: RiBillFill,
  education: FaGraduationCap,
  car: AiFillCar,
  gift: AiFillGift,
};

export const getMonthlyData = (categories, date, type) => {
  return categories
    .filter((cat) => cat["transaction_type"] === type)
    .map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        Icon: categoryIcons[cat.icon],
        color: categoryColors[cat.color],
        amount: cat.transactions.reduce((acc, cur) => {
          const trxDate = parseISO(cur.date);
          const trxYear = trxDate.getFullYear();
          const trxMonth = trxDate.getMonth();
          if (trxYear === date.year && trxMonth === date.month) {
            return acc + cur.amount;
          } else {
            return acc;
          }
        }, 0),
      };
    });
};
