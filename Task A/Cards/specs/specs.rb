require("minitest/autorun")
require("minitest/rg")
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test

    def setup()
        @card1 = Card.new("Hearts", 5)
        @card2 = Card.new("Hearts", 1)
        @cards = [@card1, @card2]
    end

    def test_check_for_ace
        assert_equal(1, @card2.value())
    end

    def  test_highest_card
        assert_equal(5, @card1.value())
    end

    def test_cards_total
        assert_equal("You have a total of 6", CardGame.cards_total(@cards))
    end

end
