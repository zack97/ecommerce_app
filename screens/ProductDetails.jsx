import { Text, TouchableOpacity, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import styles from "./productDetails.style";
import { COLORS, SIZES } from "../constants/index";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const setProductRating = (index) => {
    setRating(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={32}
            color={COLORS.darkGray}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={32} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>
              {item.price.includes("€") ? item.price : `€${item.price}`}
            </Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setProductRating(index)}
              >
                <Ionicons
                  name={index <= rating ? "star" : "star-outline"}
                  size={24}
                  color="gold"
                />
              </TouchableOpacity>
            ))}
            <Text style={styles.ratingText}>({rating}.0)</Text>
          </View>

          <View style={styles.counter}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name="plus" size={20} color={COLORS.darkGray} />
            </TouchableOpacity>
            <Text style={styles.counterText}>{count}</Text>
            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name="minus" size={20} color={COLORS.darkGray} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.locationWrapper}>
          <View style={styles.locationItem}>
            <Ionicons
              name="location-outline"
              size={20}
              color={COLORS.darkGray}
            />
            <Text style={styles.locationText}> {item.product_location} </Text>
          </View>
          <View style={styles.locationItem}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={20}
              color={COLORS.darkGray}
            />
            <Text style={styles.locationText}> Free Delivery </Text>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
