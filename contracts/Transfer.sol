// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Transfer {

    uint256 i=0;

    struct SoldProperty{
        address buyer;
        address payable seller; //null
        string property_title;
    }

    mapping(uint256 => SoldProperty) public properties_sold;


    function addProperty(address payable _seller,string memory prop_title) public {
        properties_sold[i++]=SoldProperty(msg.sender,_seller,prop_title);
    }

    function sayHi() public pure returns(string memory){
        return "hi there";
    }

    function getPropertiesLength() public view returns (uint256){
        return i;
    }


    function getAllProperties() public view returns (SoldProperty[] memory){
        SoldProperty[] memory ret = new SoldProperty[](i);
        for (uint j = 0; j < i; j++) {
            ret[j] = properties_sold[j];
        }
        return ret;
    }


    function getPropertyByTitle(string memory _title) public view returns(SoldProperty memory){
        for (uint k = 0; k < i; k++) {
            if(compareStrings(properties_sold[k].property_title,_title)){
                return properties_sold[k];
            }
        }
        revert("No prop by this idd found");
    }

    function compareStrings(string memory a, string memory b) public pure returns(bool) {
        return(keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }






























    function sendViaTransfer(address payable _to) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

}
