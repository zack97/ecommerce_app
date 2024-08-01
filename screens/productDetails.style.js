import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: screenWidth * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: screenHeight * 0.05,
    width: screenWidth * 0.9,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: "100%",
    height: screenHeight * 0.4,
    borderBottomLeftRadius: SIZES.medium,
    borderBottomRightRadius: SIZES.medium,
  },
  details: {
    marginTop: -screenHeight * 0.03,
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: SIZES.medium,
  },
  titleRow: {
    paddingVertical: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
    color: COLORS.darkGray,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.medium,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    color: COLORS.black,
  },
  ratingRow: {
    paddingVertical: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginLeft: SIZES.small,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: COLORS.darkGray,
    marginHorizontal: SIZES.small,
  },
  descriptionWrapper: {
    marginTop: SIZES.medium,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: COLORS.darkGray,
    marginBottom: SIZES.small,
  },
  descriptionText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
    textAlign: "justify",
    lineHeight: SIZES.medium,
  },
  locationWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.small,
    padding: SIZES.small,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.medium,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.darkGray,
    marginLeft: SIZES.small,
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.large,
    alignItems: "center",
    marginRight: SIZES.small,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: SIZES.medium,
    elevation: 5,
  },
  cartTitle: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  addCart: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: SIZES.medium,
    elevation: 5,
  },
});

export default styles;
