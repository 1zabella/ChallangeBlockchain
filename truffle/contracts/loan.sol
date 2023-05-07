// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;
/*Importação de biblioteca que faz com que as equações da indenização funcionem, visto que com operações 
normais os valores resultantes estavam excedendo os limites do tipo de dados usado para armazenar o valor*/
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract Arbitragem is Ownable, IERC721Receiver {
    using SafeMath for uint256;
    address payable owner; //wallet BTG (administrador do contrato)
    uint256 spread; //taxa que ficará para o BTG
    uint amount; //valor que o seller quer investir
    uint amountFinal; //valor que o seller receberá ao final de 1 ano (calculado com o juros informado no momento de investimento)
    address btgdol; //conexão com a stablecoin
    address collateral;
    address payable seller; //waller de quem empresta o dinheiro
    mapping (address => uint) buyerAmount; //quanto de dinheiro será emprestado para cada um
    mapping (address => uint) finalValue; //quanto de dinheiro o buyer deve pagar ao fim do período
    mapping (address => bool) buyerIsActive; //o buyer só poderá receber o empréstimo quando enviar seu token colateral para o contrato
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier isActive(address _buyerAddress) {
        require(memberIsActive[_buyerAddress]);
        _;
    }

    constructor(
        uint _spread,
        uint[] memory _finalValue,
        uint[] memory _buyerAmount,
        address[] memory _buyers,
        address _owner,
        address _seller,
        address _btgdol,
        uint _amountFinal,
        address _collateral
    ) {
        owner = payable(_owner);
        spread = _spread;
        seller = _seller;
        btgdol = _btgdol;
        amount = _amount;
        colateral = _collateral;
        amountFinal = _amountFinal;
        for (uint256 i = 0; i < _buyerAmount.length; i++) {
            buyerAmount[_buyers[i]] = _buyerAmount[i];
            finalValue[_buyers[i]] = _finalValue[i];
            memberIsActive[_buyers[i]] = false;
        }
    }

        function canBuy (address _address) public view returns (string memory) {
        return buyerAmount[_address];
    }

        function onERC721Received(operator, from, tokenId, data) public {
        memberIsActive[from] = true; //após o pagamento o cliente está ativo para realizar demais funções no contrato
    }

// A função abaixo serve para que o seller envie seu dinheiro para o contrato
    function getMoney (uint _amount) public payable{
        _amount = amount;
        IERC20(token).transferFrom(msg.sender, address(this), _amount);
    }

//A função abaixo serve para enviar o dinheiro requisitado do empréstimo do contrato para o buyer
    function sendLoan (uint _amount) public payable isActive(msg.sender){
        _amount = buyerAmount[msg.sender];
        IERC20(token).transferFrom(address(this), msg.sender, _amount);
    }

//A função abaixo serve para que o buyer envie o valor que pegou emprestado, com juros, para o contrato
    function payLoan (uint _amount) public payable{
        _amount = finalValue[msg.sender];
        IERC20(token).transferFrom(msg.sender, address(this), _amount);
    }

//A função abaixo serve para que o contrato envie o valor que o buyer devia para o seller
    function sendLoanToSeller (uint _amount) public payable{
        _amount = _amountFinal;
        IERC20(token).transferFrom(address(this), msg.sender, _amount);
    }
}