import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react'

const ProductDetails = ({route}) => {
  const { product } = route.params;
  return (
    <View>
      <Text style={styles.textStyle}>Pay By Cash</Text>
      <Text style={styles.textStyle}>Pay By Debit Card</Text>
      <Text style={styles.productName}>{product.name}</Text>
      <FlatList
        horizontal
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.productImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.imageList}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageList: {
    marginBottom: 16,
  },
  productImage: {
    width: 200,
    height: 200,
    marginRight: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewContainer: {
    marginBottom: 8,
  },
  reviewRating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewComment: {
    fontSize: 16,
  },
  textStyle:{
    fontWeight:'600',
    textAlign:"center",
    marginTop:55,
    fontSize:22,
    color:"black"
  }
});
export default ProductDetails
// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';

// const ProductDetailScreen = ({ route }) => {
//   const { product } = route.params;

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.productName}>{product.name}</Text>
//       <FlatList
//         horizontal
//         data={product.images}
//         renderItem={({ item }) => (
//           <Image source={{ uri: item }} style={styles.productImage} />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.imageList}
//       />
//       <Text style={styles.productPrice}>${product.price}</Text>
//       <Text style={styles.productDescription}>{product.description}</Text>
//       <Text style={styles.reviewsTitle}>Reviews:</Text>
//       {product.reviews.map((review, index) => (
//         <View key={index} style={styles.reviewContainer}>
//           <Text style={styles.reviewRating}>Rating: {review.rating}/5</Text>
//           <Text style={styles.reviewComment}>{review.comment}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#ffffff',
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   imageList: {
//     marginBottom: 16,
//   },
//   productImage: {
//     width: 200,
//     height: 200,
//     marginRight: 8,
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   productDescription: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   reviewsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   reviewContainer: {
//     marginBottom: 8,
//   },
//   reviewRating: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   reviewComment: {
//     fontSize: 16,
//   },
// });

// export default ProductDetailScreen;
