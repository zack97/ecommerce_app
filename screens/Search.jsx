import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SIZES, COLORS } from "../constants";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setsearchKey] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  const handlePress = async () => {
    try {
      const response =
        await axios.get(`https://ecom-app-backend.vercel.app/api/products/search/${searchKey}
`);
      setSearchResult(response.data.products);
    } catch (err) {
      console.log("Failed to get products", err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setsearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handlePress()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>

      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
