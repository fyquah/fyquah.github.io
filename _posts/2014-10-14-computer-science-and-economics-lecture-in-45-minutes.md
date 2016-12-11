---
layout: post
title: Computer Science And Economics Lecture In 45 Minutes
subtitle: A great way to explain bitcoin, with computer sciece and economics in it!
category: eng

excerpt: 

---

I was wandering in college and stumble upon a poster a few days back:

<div class="full zoomable"><img src="/images/imperial-bitcoin-forum-poster.jpg"></div>

It looks cool, so I attended. Unintentionally, I have attended one of the best "lectures" I have had in some time, and probably one of the best I will have in the next couple of years.

# The Forum

The forum kicked off with ordinary introductory speeches about what bitcoin is and how people have responded to it. Some of the key ones :

* **What is bitcoin** : A digital currency
* **Bill Gates** : Bitcoin is better than currency
* **Richard Branson** : Bitcoin is working

While these introductions might been amazing, the next talk by a professor from the college, *Mr. Iain Stewart* simply blew all of the audience of their chairs. It was a technical talk, consisting of both financial and computer science aspects of block chain and digital currencies.

# The talk

I was expecting him to explain something about the block chain for a start. Instead, he went back all the way to the pre-money era.

## The initial state of markets

To be fair, there were no markets. Everyone had to produce whatever they need. Eg : If I want to have rice, vegetables and mutton, I would have to own (and of course, actively operate) a paddy field, grow vegetables and breed cows. We are sure this is definitely not the most efficient / productive way to live. That was until ...

## Barter System

This is when people started specializing in production. Eg : If i want rice, vegetables and muttons and I have inhreitted a paddy field from my parents, I will produce only rice as it is the most efficient act I can make. I will then trade my extra rice for muttons and vegetables, fulfilling my needs. While it can work on a small scale, the whole system will be rather chaotic in the long run (due to many trading relationships).

The magnificence of the lecturer starts here. Instead of simply saying the requirement of 'common wants' complexify things and create a crazy chain of wants, he justified this by introducing system barter as **'The N^2 problem'**. To illustrate it, I shall assume that the market compromises of only rice, vegetable and mutton.

<div style="text-align : center">
    <style>
    #n2table {
        margin : auto auto;
    }

    #n2table td {
        border: solid 1px black;
        padding: 5px;
    }
    </style>
    <table id="n2table">
        <tr>
            <td></td>
            <td><b>Rice</b></td>
            <td><b>Vegetable</b></td>
            <td><b>Mutton</b></td>
        </tr>
        <tr>
            <td><b>Rice</b></td>
            <td style="background-color : gray"></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><b>Vegetable</b></td>
            <td></td>
            <td style="background-color : gray"></td>
            <td></td>
        </tr>
        <tr>
            <td><b>Mutton</b></td>
            <td></td>
            <td></td>
            <td style="background-color : gray"></td>
        </tr>
    </table>
</div>

*The table is rather straight forward. The 1st row second column means someone with rice who wants vegetables, while the 2nd row 1st column means someone with vegetable who wants rice. The row label means supply, and column label means demand.*

There are a total of N(N-1) markets (which makes it O(N^2)), and that is a serious issue. Now that if I want the 3 things, I have to make sure those 3 markets exist or I will have to trade for something else and before getting what I want. As we know the value of N is (more or less) infinite, N^2 markets simply does not make sense. This was until money was created:

## Money 

The "most swappable thingey" (claimed to be abbreviated to 'money' by the speaker) is simply a standardized unit of trade. The creation of money goes down as one of the greatest creation in mankind. It magnificently reduces O(N^2) markets into O(N) markets. The former markets in the form of "supply rice, demand vegetables" have been simplified into "supply rice, demand money" or vice versa (that corresponds to 2N markets, but this fact isn't too important). In computer science, we know that reducing a problem from O(N^2) to O(N). In economics (or more common sense), simplifying problems are often the key to improvements.

So now we have money, and everyone is trading like nobody's business. Production grows, <em>locally</em>.

Early forms of moneys are in the form of gold, silver or valuable materials that cannot be duplicated. Money fulfills each of the following:

* Portable
* Valueable
* Medium of exchange
* Unit of Account
* Freedom of usage (nonstandard claim)

All is well and money is popularized. Soon, everyone is using money and fiat currency is evolved from the system (personally, I thought that the system is good, but less governments are utilizing this debt-based currency well). However, in the current context, it doesn't really matter whether it is "fiat currency", "gold coins" or "snail shells". All that matter that "the most swappable thingey" is the uniform unit of trade. To simplify the write up, we will call this "Most swappable thingey" money.

All is well.

.. until international trade came in.

## International trade

While money are portable, they are not portable enough! They lack *'teleportation'* abilities. For example:

Bob's in Malaysia wants to send 100 units of money to Alice in USA. Wait, how the hell are you supposed to do that? Sending by envelope would likely have an empty envelope end up at Alice's place. So, international transfer institutions (Wester Union, being one of the earliest pioneers) were formed. So instead of having Bob sending Alice 100 units of money, the process is :

1. Bob goes to financial office at Malaysia
2. Bob tells financial officer that he wants to send Alice 100 gold coins
3. Financial Office debits 101 gold coins (1 gold coin processing fees, note that this is significant!) and informs office in USA.
4. USA office sends a mail to Alice, telling her to collect her gold coins at their office.
5. She goes to the office, type her password (this is also significant) and 100 gold coins!

Now you may think it is well. Money is sent from one end of the world to the other (This is almost literally true, as the distance of Malaysia to New York is 14,994 km, about a third of the Earth's circumference). 

However, this "virtual currency" do not actually exist as money. There are merely numbers in computers! (some interesting topics about this are double spending prevention and fraudulent conveyance, but I will not go into those). Numbers in computer at Malaysia agrees that Bob's money has been reduced by 100 units of money and vice versa at numbers in the United States. This sounds OKAY, we will believe, as money is deducted from Bob's pocket and money is added into Alice's pocket.

Now, all should be well. I can transfer money globally and carry out international trade.

## The Unoticed Flaw

Let's go back to international trade:

* 1 gold coin processing fees
* type her password

While these "financial transfers" have grant money 'teleporation' abilities, they destroyed one of money's fundamental abilities -- Freedom of usage. We have been programmed not to notice that (kudos to speaker for pointing this out) . Think about the last time you go to a bank to set up a current / saving account, did you sign some documents, which usually ends with ***Terms and conditions apply***.

We never really bothered, as they should always apply.

>> HELL NO

Why the hell should T&C apply when we put money in our bank for transfers? Why the hell when I send money to Alice (assuming I am Bob), T & C shoud apply? The problems goes down to a trust-based monetary system we are currently using. Having trust in anything simply calls for contracts and signatures. The relation goes like this:

* Bob trust Financial Office in Malaysia to send the money to alice
* Financial Office in Malaysia trusts Financial Office in USA to give the money to Alice
* Financial Office in USA trust that Financial Office in Malaysia is speaking the truth
* Alice trusts Financial Office in USA that they are giving the right amount

While it may be more complex, this simple relation illustrates how important trust is in the current international trade / financial transfer system. The problem lies in the existence of a middle man. Imagine if gold coins can teleport, the scenario will be simplified into:

**Bob teleports gold coins to Alice's hands** , *end of story*

So if there is trust, what is backing it? It is what we call "the most swappable thingey" previously. In other words, the creation of financial transfer does not actually create a new type of currency or erradicates all existing problems, it is just a trust-based way of transferring money which erradicates portability problems in the expense of spending privacy. At the end of the day, all "Terms and conditions" plus contracts are backed by the "most swappable thingey" a.k.a. money.

We did not create "a new form" of trading mechanism, all we created was a complex trust-based mechanism to enhance global trading.

This is where block chain technology comes in:

## Block Chain

Block chain technology forms the basis of digital currency. While conventional financial transfer requires loads of trust in it, block chain-based technology, a.k.a. "Better most swappable thingey", does not. Block chain may sound like rocket science, but it is fairly simple to understand. "Block" refers to individual transactions and "chain" refers to a series of transaction occuring.

Block chain technology does require verification by a third party in some sense, but no elements of trust is required. Illustrating the process in words is hard, but I will try to explain using an example:

1. Bob wants to send Alice 100 units of "better most swappable thingey, *B* "
2. Bob appends the transaction into the block chain
3. People all over the world (a.k.a third parties) tries to verify the transaction
4. Once someone verifies it, Alice gets 100 units of *B* !
5. (This is the case for bitcoin, may vary for other digital currency) That fellow that verified the transaction get some units of *B* as a reward!

The transaction verification is highly mathematical that the person who created it does not have an advantage to it, as it is signed by the private key of the previous transaction in the chain. As a result, the probability of anyone solving it is equal, and near nil. If you find the last few sentences too hard to decipher, just take it as the verification is really awesome and secure.

I am not writing in detail how the technical aspects of verification are, but it invovles hash function target value puzzle and proof of work to verify transactions. The identification verification is based on public-private key (if you are familiar with ssh(secure shell), it uses similiar technologies.)

## Some possible problems

This system maybe ideal, but there are some likely problems. You may read more about them with a simple google:

* 51 % attack scenario
* Dark wallet
* Usage of stealth address (an address which maps to the same account)
* Scalability

Works have been done with addressing these issues. Someone posted a question to the speaker about some of the problems above, and he did mention researches are going on, and suggested reading <a href="http://utxo.tumblr.com/">Bitcoin Scalability Engineering</a>

### End of Lecture

Mr. Iain Stewart received a truly warm applause for his highly informative, magnificent and humourous speech. The forum carried on with some talk of entrepreneurs in the bitcoin industry, one of them being a private-key offline vault, backed by insurance (ironically, in the form of conventional money) and bitcoin lending services (they charge interest rates in BTC!). Both of them were co-founded by Imperial alumni :)

We were then introduced to a program by EF, Entrepeneur First, to a Bitcoin project for imperial. More details available at <a href="http://joinef.com/bitcoin">joinef.com/bitcoin</a> and <a href="http://www3.imperial.ac.uk/bitcoin">Imperial Bitcoin portal</a>

That's it for the day. Digital Currency is (already) changing the world.

<div class="full zoomable"><img src="/images/bitcoin-technical-lecture.jpg"></div>

He is explaining about the "freedom of spending" in the above picture.

## Sources

* http://www.entrepreneur.com/article/238103
* http://www.coindesk.com/sir-richard-branson-bitcoin-working/

## Updates

Managed to get the lecturer's name from @matthewcliffod at twitter! Thanks! And a big shout out once again to Iain Stewart for the outstanding talk that day!.
