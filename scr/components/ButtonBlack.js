import React, {TouchableOpacity, View, Text} from 'react-native';

const ButtonBlack = ({title}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingVertical: 4,
        alignSelf: 'center',
        paddingHorizontal: 10,
        borderRadius: 12,
      }}>
      <Text style={{fontSize: 14, fontWeight: '600', color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBlack;
